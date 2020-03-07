const express = require('express')
const routes = require('./controllers/route.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
  }

  /**
   * db connect
   * @return {Object} connect
   */
  dbConnect () {
    const host = 'mongodb://localhost:27017/facebook-api'
    const connect = mongoose.createConnection(host)

    connect.on('error', (err) => {
      setTimeout(() => {
        console.log('[ERROR] api dbConnect() -> mongodb error')
        this.connect = this.dbConnect(host)
      }, 5000)

      console.error(`[ERROR] api dbConnect() -> ${err}`)
    })

    connect.on('disconnected', () => {
      setTimeout(() => {
        console.log('[DISCONNECTED] api dbConnect() -> mongodb disconnected')
        this.connect = this.dbConnect(host)
      }, 5000) 
    })

    process.on('SIGINT', () => {
      connect.close(() => {
        console.log('[API END PROCESS] api dbConnect() -> close mongodb connection ')
        process.exit(0)
      })
    })

    return connect
  }

  /**
   * middleware
   */
  middleware () {
    this.app.use(bodyParser.urlencoded({ 'extended': true }))
    this.app.use(bodyParser.json())
  }

  /**
   * routes
   */
  routes () {
    // Users
    new routes.users.Create(this.app, this.connect)
    new routes.users.Show(this.app, this.connect)
    new routes.users.Update(this.app, this.connect)
    new routes.users.Delete(this.app, this.connect)

    // Events
    new routes.events.CreateEvents(this.app, this.connect)
    new routes.events.ShowEvents(this.app, this.connect)
    new routes.events.UpdateEvents(this.app, this.connect)
    new routes.events.DeleteEvents(this.app, this.connect)

    // Groups
    new routes.groups.CreateGroups(this.app, this.connect)
    new routes.groups.ShowGroups(this.app, this.connect)
    new routes.groups.UpdateGroups(this.app, this.connect)
    new routes.groups.DeleteGroups(this.app, this.connect)

    // Discussion_group
    new routes.discussion_groups.CreateDiscussion(this.app, this.connect)
    new routes.discussion_groups.ShowDiscussion(this.app, this.connect)
    new routes.discussion_groups.DeleteDiscussion(this.app, this.connect)
    new routes.discussion_groups.UpdateDiscussion(this.app, this.connect)

    // Photo_album
    new routes.photo_albums.CreateAlbum(this.app, this.connect)
    new routes.photo_albums.ShowAlbum(this.app, this.connect)
    new routes.photo_albums.DeleteAlbum(this.app, this.connect)
    new routes.photo_albums.UpdateAlbum(this.app, this.connect)

    // Survey
    new routes.survey.CreateSurvey(this.app, this.connect)
    new routes.survey.ShowSurvey(this.app, this.connect)
    new routes.survey.DeleteSurvey(this.app, this.connect)
    new routes.survey.UpdateSurvey(this.app, this.connect)

    // Tickets
    new routes.tickets.CreateTickets(this.app, this.connect)
    new routes.tickets.ShowTickets(this.app, this.connect)
    new routes.tickets.DeleteTickets(this.app, this.connect)
    new routes.tickets.UpdateTickets(this.app, this.connect)

    // Shopping_list
    new routes.shopping_lists.CreateShopping(this.app, this.connect)
    new routes.shopping_lists.ShowShopping(this.app, this.connect)
    new routes.shopping_lists.DeleteShopping(this.app, this.connect)
    new routes.shopping_lists.UpdateShopping(this.app, this.connect)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not Found'
      })
    })
  }

  /**
   * run
   */
  run () {
    try {
      this.connect = this.dbConnect()
      this.dbConnect()
      this.middleware()
      this.routes()
      this.app.listen(3000)
    } catch (err) {
      console.error(`[ERROR] Server -> ${err}`)
    }
  }
}

module.exports = Server
