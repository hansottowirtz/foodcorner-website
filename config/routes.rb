Rails.application.routes.draw do
  root 'main#main'
  get 'orders/:id', to: 'main#main'

  scope 'api', format: :json do
    get 'lockers', to: 'api#index_lockers'
    post 'lockers/:id/open', to: 'api#open_locker'
  end
end