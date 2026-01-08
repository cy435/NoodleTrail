class WxCanvas {
  constructor(ctx, canvasId, isNew, canvasNode) {
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;
    this.isNew = isNew;
    if (isNew) {
      this.canvasNode = canvasNode;
    } else {
      this._initStyle(ctx);
    }
    this._initEvent();
  }

  getContext(contextType) {
    if (contextType === '2d') {
      return this.ctx;
    }
  }

  setChart(chart) {
    this.chart = chart;
  }

  addEventListener() {
    // noop
  }

  attachEvent() {
    // noop
  }

  detachEvent() {
    // noop
  }

  _initCanvas(zrender, ctx) {
    zrender.util.getContext = function () {
      return ctx;
    };

    zrender.util.$override('measureText', function (text, font) {
      ctx.font = font || '12px sans-serif';
      return ctx.measureText(text);
    });
  }

  _initStyle(ctx) {
    ctx.createRadialGradient = () => {
      return ctx.createCircularGradient(arguments);
    };
  }

  _initEvent() {
    this.event = {};
    const eventNames = [
      { wxName: 'touchStart', ecName: 'mousedown' },
      { wxName: 'touchMove', ecName: 'mousemove' },
      { wxName: 'touchEnd', ecName: 'mouseup' },
      { wxName: 'touchEnd', ecName: 'click' }
    ];
    eventNames.forEach(name => {
      this.event[name.wxName] = e => {
        const touch = e.touches && e.touches[0] ? e.touches[0] : (e.changedTouches && e.changedTouches[0]) || {};
        if (!this.chart || !this.chart.getZr) return;
        const handler = this.chart.getZr().handler;
        if (!handler || !handler.dispatch) return;
        const zrX = name.wxName === 'tap' ? touch.clientX : (typeof touch.x !== 'undefined' ? touch.x : touch.clientX);
        const zrY = name.wxName === 'tap' ? touch.clientY : (typeof touch.y !== 'undefined' ? touch.y : touch.clientY);
        handler.dispatch(name.ecName, {
          zrX,
          zrY,
          preventDefault: function () {},
          stopImmediatePropagation: function () {},
          stopPropagation: function () {}
        });
      };
    });
  }

  set width(w) {
    if (this.canvasNode) this.canvasNode.width = w;
  }
  set height(h) {
    if (this.canvasNode) this.canvasNode.height = h;
  }

  get width() {
    if (this.canvasNode) return this.canvasNode.width;
    return 0;
  }
  get height() {
    if (this.canvasNode) return this.canvasNode.height;
    return 0;
  }
}

module.exports = WxCanvas;