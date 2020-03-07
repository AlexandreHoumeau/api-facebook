const Surveys = require('../../models/survey')
const Event = require('../../models/event')
const JWT = require('../../jwt')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Create {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Surveys', Surveys)
    this.EventModel = connect.model('Event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.post('/survey/create/', jwt.express(), async (req, res) => {
      try {
        const surveyModel = new this.SurveyModel(req.body)
        const event = await this.EventModel.findById(req.body.event)

        // Check if Id event exist in DB
        if (!event) {
          return res.status(403).json('Invalid Event ID')
        }

        await surveyModel.save()
        res.status(201).send({surveyModel})
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }
  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Create
