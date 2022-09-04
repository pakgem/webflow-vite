function global() {
  // Add calendly buttton functionality
  $(document).ready(function () {
    $('#calendly-btn').click(function (e) {
      e.preventDefault()
      $('.calendly-badge-widget').trigger('tap')
    })
  })
}

export default global
