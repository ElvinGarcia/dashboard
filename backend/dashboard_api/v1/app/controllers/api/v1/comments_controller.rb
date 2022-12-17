class Api::V1::CommentsController < ApplicationController

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    binding.pry
    @link = Link.create(link_params)
    @comment = current_user.comments.build(comment_params)
    @comment.links.build(@link)
    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      # {"comment"=>"test", "url"=>"example.com", "id"=>"12345"} permitted: true>
      params.require(:comment).permit(:body,:id)
    end

    def link_params
      # {"comment"=>"test", "url"=>"example.com", "id"=>"12345"} permitted: true>
      params.require(:comment).permit(:url)
    end
end
