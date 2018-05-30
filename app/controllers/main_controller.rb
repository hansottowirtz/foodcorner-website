class MainController < ApplicationController
  layout 'application'
  
  def main
    render html: '', layout: 'application'
  end
end