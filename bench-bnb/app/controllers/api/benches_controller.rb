class Api::BenchesController < ApplicationController
  def index

    # coords = {
    #   ne_lng: params[:bounds][:northEast][:lng], 
    #   sw_lng: params[:bounds][:southWest][:lng], 
    #   ne_lat: params[:bounds][:northEast][:lat], 
    #   sw_lat: params[:bounds][:southWest][:lat]
    # }

    # query = "lng <= :sw_lng AND lng >= :ne_lng AND lat <= :ne_lat AND lat >= :sw_lat"

    # @benches = Bench.where(query, coords)
    @benches = Bench.all
    render :index
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :create
    else
      render json: @bench.errors.full_messages
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
  
end
