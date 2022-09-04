import $ from 'jquery'
function home() {
  if ($('body').attr('page') == 'home') {
    $('#starter-signup').click(function () {
      writeCookie('pricingId', 'prc_flowpal-starter-plan-t5580s08', 1)
    })

    $('#pro-signup').click(function () {
      writeCookie('pricingId', 'prc_flowpal-pro-plan-ks570sal', 1)
    })

    $('#unlimited-signup').click(function () {
      writeCookie('pricingId', 'prc_flowpal-unlimited-plan-d3560sfu', 1)
    })
  }
}

function writeCookie(name: string, value: string, days: number) {
  let date = new Date()
  let expires
  if (days) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = '; expires=' + date.toString()
  } else {
    expires = ''
  }
  document.cookie = name + '=' + value + expires + '; path=/'
}

export default home
