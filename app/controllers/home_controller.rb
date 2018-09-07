class HomeController < ApplicationController
  before_action :authenticate_user!
  layout "home"

  def index
    @home_props = { email: current_user.email }
  end
end
