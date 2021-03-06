const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./events'))
router.use('/songs', require('./songs'))
router.use('/playlistSongs', require('./playlistSongs'))
router.use('/eventUsers', require('./eventUsers'))
router.use('/songs', require('./songs'))
router.use('/prioritizedTracks', require('./prioritizedTracks'))
router.use('/spotifyPlaylist', require('./spotifyPlaylist'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
