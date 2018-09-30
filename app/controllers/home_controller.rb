class HomeController < ApplicationController
  before_action :authenticate_user!
  layout "home"

  def index
    @posts = Post.all.order('created_at DESC')
    @home_props = { email: current_user.email, posts: @posts }
  end
end
