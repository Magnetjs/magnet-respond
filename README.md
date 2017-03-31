### Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/Magnetjs/magnet-respond.svg)](https://greenkeeper.io/)
Basic
```
import magnet from 'magnet-core';
import Config from 'magnet-config';
import Logger from 'magnet-bunyan';
import Server from 'magnet-spdy';
import Session from 'magnet-session';
import Router from 'magnet-router';
import Respond from 'magnet-respond';

let app = await magnet([Config, Logger, Server, Session, Respond, Router]);
```

controllers/todo.js
```
export default function todo({
  Joi,
  router,
  validation
}) {
  router

  .get(
    '/bookings',
    async function index(ctx) {
      try {
        ctx.body = await app.models.Booking.find().lean();
      } catch (err) {
        app.log.error(err);
        ctx.respond.internalServerError();
      }
    }
  )
}
```
