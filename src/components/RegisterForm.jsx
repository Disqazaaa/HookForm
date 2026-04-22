import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import FormField from './FormField.jsx'
import './RegisterForm.css'

function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const password = watch('password')

  const onSubmit = (data) => {
    toast.success(`Пользователь ${data.name} успешно зарегистрирован!`)
    reset()
  }

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">Регистрация</h2>

        <FormField label="Имя" error={errors.name?.message}>
          <input
            className={`form__input${errors.name ? ' form__input--error' : ''}`}
            type="text"
            placeholder="Введите имя"
            {...register('name', {
              required: 'Имя обязательно для заполнения',
            })}
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message}>
          <input
            className={`form__input${errors.email ? ' form__input--error' : ''}`}
            type="text"
            placeholder="Введите email"
            {...register('email', {
              required: 'Email обязателен для заполнения',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email адрес',
              },
            })}
          />
        </FormField>

        <FormField label="Пароль" error={errors.password?.message}>
          <input
            className={`form__input${errors.password ? ' form__input--error' : ''}`}
            type="password"
            placeholder="Введите пароль"
            {...register('password', {
              required: 'Пароль обязателен для заполнения',
              minLength: {
                value: 6,
                message: 'Пароль должен содержать минимум 6 символов',
              },
            })}
          />
        </FormField>

        <FormField label="Подтверждение пароля" error={errors.confirmPassword?.message}>
          <input
            className={`form__input${errors.confirmPassword ? ' form__input--error' : ''}`}
            type="password"
            placeholder="Повторите пароль"
            {...register('confirmPassword', {
              required: 'Подтверждение пароля обязательно',
              validate: (value) =>
                value === password || 'Пароли не совпадают',
            })}
          />
        </FormField>

        <button className="form__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
