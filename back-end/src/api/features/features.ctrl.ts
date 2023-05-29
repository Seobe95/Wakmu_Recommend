import { ParameterizedContext } from 'koa';

const featuresCtrl = {
  list: (ctx: ParameterizedContext) => {
    const list = ctx.request.body;

    ctx.body = {
      list,
    };
  },
};

export default featuresCtrl;
