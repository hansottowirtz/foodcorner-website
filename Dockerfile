FROM ruby:alpine
ENV BUNDLE_PATH=/build-cache/bundle \
  BUNDLE_BIN=/build-cache/bundle/bin \
  GEM_HOME=/build-cache/bundle \
  RAILS_ENV=production \
  NODE_ENV=production
ENV PATH="${BUNDLE_BIN}:${PATH}"

RUN addgroup -S app && adduser -S -G app app
RUN mkdir /app-tmp && mkdir /build-cache && mkdir /build-cache/bundle
COPY Gemfile* /app-tmp/

RUN apk update && \
  apk --update add ruby-json ruby-rake tzdata nodejs
RUN apk --update add --virtual .build-dependencies \
  build-base ruby-dev libc-dev linux-headers \
  libressl-dev postgresql-dev libxml2-dev libxslt-dev git yarn

RUN gem install bundler && \
  cd /app-tmp && \
  bundle install --without development test --path $BUNDLE_PATH --deployment

COPY package.json yarn.lock /app-tmp/
RUN cd /app-tmp && \
  yarn --prod --non-interactive && \
  mv /app-tmp/node_modules /build-cache

COPY app /app-tmp/app
COPY bin /app-tmp/bin
COPY config /app-tmp/config
COPY Rakefile tsconfig.json .postcssrc.yml /app-tmp/
RUN cd /app-tmp && \
  ln -s /build-cache/node_modules /app-tmp/node_modules && \
  rake assets:precompile && \
  mv /app-tmp/public/assets /build-cache && \
  mv /app-tmp/public/packs /build-cache

COPY . /app 
RUN cd /app && \
  ln -s /build-cache/node_modules /app/node_modules && \
  ln -s /build-cache/assets /app/public/assets && \
  ln -s /build-cache/packs /app/public/packs && \
  apk del .build-dependencies && \
  rm -rf /app-tmp && \
  chown -R app:app /app

USER app
WORKDIR /app
EXPOSE 8080

ENV BUNDLE_GEMFILE=Gemfile
CMD ["bundle", "exec", "rails", "s", "-p", "8080", "-b", "0.0.0.0"]
