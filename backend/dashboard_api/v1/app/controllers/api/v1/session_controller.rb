class Api::V1::SessionController < ApplicationController
  def login

  end

  def reddit
    # base_req = request.original_url.partition(request.base_url+"/api/v1/").last
    # response = HTTParty.get('https://www.reddit.com/r/popular.json')
    response = HTTParty.get('http://www.reddit.com/r/popular.json')
    render :json => response
  end

  def hackerNews
    #returns the top stories id
    response = HTTParty.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    # returns the first 10 items in an Array
    response.first(10)
    binding.pry

  end

end