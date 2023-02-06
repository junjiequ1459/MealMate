require_relative "boot"
require "rails"
require "active_model/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_view/railtie"

Bundler.require(*Rails.groups)

module MealMate
  class Application < Rails::Application
    config.load_defaults 7.0

    config.api_only = true

    config.railties_order = [:all, :main_app]

    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore,
      key: "_meal_mate_session",
      same_site: :lax,
      secure: Rails.env.production?
  end
end
