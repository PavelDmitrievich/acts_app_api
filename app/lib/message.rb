class Message
  def self.not_found(record = 'record')
    "Извините, #{record} не найдено :("
  end

  def self.invalid_credentials
    'Недопустимые учетные данные'
  end

  def self.invalid_token
    'Недопустимый токен'
  end

  def self.missing_token
    'Отсутствует токен'
  end

  def self.unauthorized
    'Несанкционированный запрос'
  end

  def self.account_created
    'Аккаунт успешно создан!'
  end

  def self.account_not_created
    'Аккаунт не создан!'
  end

  def self.expired_token
    'Извините, ваш токен истек. Пожалуйста, войдите, чтобы продолжить.'
  end
end
