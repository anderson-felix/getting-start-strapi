import { Event } from '@strapi/database/lib/lifecycles';

type Model = Record<string, any>;

interface HookEvent extends Event {
  result: Model;
}

export default {
  afterFindOne(event: HookEvent) {
    if (event.result.avatar) event.result.avatar = `${process.env.APP_API_URL}${event.result.avatar}`
  },
  afterFindMany(event: HookEvent) {
    (event.result as Model[]).forEach(result => {
      if (result.avatar) result.avatar = `${process.env.APP_API_URL}${result.avatar}`
    });
  },
}