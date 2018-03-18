class ActsController < ApplicationController

  def index
    @acts = current_user.acts
    json_response(@acts)
  end
end
