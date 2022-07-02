require "test_helper"

class LinksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @link = links(:one)
  end

  test "should get index" do
    get links_url, as: :json
    assert_response :success
  end

  test "should create link" do
    assert_difference("Link.count") do
      post links_url, params: { link: { url: @link.url } }, as: :json
    end

    assert_response :created
  end

  test "should show link" do
    get link_url(@link), as: :json
    assert_response :success
  end

  test "should update link" do
    patch link_url(@link), params: { link: { url: @link.url } }, as: :json
    assert_response :success
  end

  test "should destroy link" do
    assert_difference("Link.count", -1) do
      delete link_url(@link), as: :json
    end

    assert_response :no_content
  end
end
