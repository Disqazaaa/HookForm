function FormField({ label, error, children }) {
  return (
    <div className="form__field">
      <label className="form__label">{label}</label>
      {children}
      {error && <span className="form__error">{error}</span>}
    </div>
  )
}

export default FormField
