require "test_helper"

class UniversitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get universities_index_url
    assert_response :success
  end

  test "should get create" do
    get universities_create_url
    assert_response :success
  end

  test "should get show" do
    get universities_show_url
    assert_response :success
  end

  test "should get destroy" do
    get universities_destroy_url
    assert_response :success
  end
end
