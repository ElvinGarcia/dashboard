class Api::V1::SessionController < ApplicationController
  def login

  end

  def reddit
    response = HTTParty.get("#{ENV["REDDIT_API"]}")
   if response.code == 200
    render :json => response
   elsif
    puts "Reddit : response code : #{response.code}, response message: #{response.message}"
   end

  end

  def hackerNews
    response = HTTParty.get("#{ENV["HN_ID_API"]}")
    if response.code == 200
     ids = response.first(10) # returns the first 10 items in an Array
     stories_response = ids.map{|id| HTTParty.get("https://hacker-news.firebaseio.com/v0/item/#{id}.json?print=pretty")}
     render :json => stories_response
    elsif
      puts "Hacker_News : response code : #{response.code}, response message: #{response.message}"
     end



  end

end