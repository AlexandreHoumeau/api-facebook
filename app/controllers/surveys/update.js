const Survey = require('../../models/survey')
const JWT = require('../../jwt.js')
const jwt = new JWT()
/**
 * Create
 * @class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.SurveyModel = connect.model('Survey', Survey)
    this.run()
  }
  /**
   * middleware
   */
  middleware () {
    this.app.put('/survey/update/:id', jwt.express(), (req, res) => {
      const { id } = req.params
      const { body } = req
      const update = {
        $addToSet: {
          questions: body.questions
        }
      }      
      this.SurveyModel.findByIdAndUpdate(id, update, {new: true}).then(event => {
        res.status(200).json(event || {})
      }).catch(err => {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      })
    })
  }
  /**
   * run
   */
  run () {
    this.middleware()
  }
}

module.exports = Update
