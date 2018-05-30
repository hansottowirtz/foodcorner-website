class ApiController < ActionController::Base
  protect_from_forgery with: :null_session
  
  def open_locker
    time_db[params[:id].to_i] = Time.now
  end

  def index_lockers
    render json: [
      {
        id: 1,
        opened_time: time_db[1]
      },
      {
        id: 2,
        opened_time: time_db[2]
      }
    ]
  end

  private
  def time_db
    @@db ||= {1 => nil, 2 => nil}
  end
end