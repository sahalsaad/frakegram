class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = Post.where(user_id: current_user.id).order('created_at DESC')
    @home_props = { email: current_user.email, posts: @posts }
  end
end
