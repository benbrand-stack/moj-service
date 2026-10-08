//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/location-lookup-check', function (req, res) {
  const postcode = req.session.data['addressPostcode']

  // Error tolerance check: Postcode is required
  if (!postcode || postcode.trim() === '') {
    res.render('incident-location', {
      errors: {
        addressPostcode: {
          text: "Enter a real postcode, like SW1H 9AJ"
        }
      }
    })
  } else {
    // Redirect to Page 2: Incident Type
    res.redirect('/incident-type')
  }
})
