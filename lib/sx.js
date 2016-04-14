'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('material-ui/lib/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sx = function Sx(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement(
        'clipPath',
        { id: 'a' },
        _react2.default.createElement('path', { fillOpacity: '.67', d: 'M0 0h682.67v512H0z' })
      )
    ),
    _react2.default.createElement(
      'g',
      { 'clip-path': 'url(#a)', transform: 'scale(.9375)' },
      _react2.default.createElement('path', { d: 'M0 0h768v256H341.33L0 0z', 'fill-rule': 'evenodd' }),
      _react2.default.createElement('path', { d: 'M0 512h768V256H341.33L0 512z', 'fill-rule': 'evenodd' }),
      _react2.default.createElement('path', { d: 'M0 0l341.33 256L0 512V0z', 'fill-rule': 'evenodd' }),
      _react2.default.createElement('path', { d: 'M172.318 193.168l.104-3.963s-2.128-3.39.342-7.033c0 0-5.248-2.776-4.026-7.123 0 0-4.746-1.213-4.397-6.432 0 0-5.122-.355-5.652-4.716 0 0-5.123.844-7.377-3.405 0 0-4.996.977-6.406-2.526 0 0-4.857 1.683-7.74-2.435 0 0-5.128 2.073-7.278-1.813-2.121 3.872-7.25 1.813-7.25 1.813-2.848 4.103-7.74 2.4-7.74 2.4-1.36 3.517-6.343 2.519-6.343 2.519-2.247 4.25-7.363 3.405-7.363 3.405-.502 4.347-5.617 4.702-5.617 4.702.404 5.232-4.334 6.42-4.334 6.42 1.25 4.346-3.992 7.115-3.992 7.115 2.533 3.663.426 7.026.426 7.026l-.119 3.655 84.775.392' }),
      _react2.default.createElement('path', { d: 'M377.17 843.11l.091-3.458s-1.856-2.958.299-6.136c0 0-4.578-2.422-3.513-6.215 0 0-4.14-1.059-3.835-5.613 0 0-4.468-.31-4.93-4.114 0 0-4.469.736-6.435-2.971 0 0-4.358.852-5.588-2.204 0 0-4.237 1.468-6.751-2.125 0 0-4.474 1.808-6.35-1.582-1.85 3.379-6.324 1.582-6.324 1.582-2.484 3.58-6.75 2.094-6.75 2.094-1.188 3.068-5.534 2.198-5.534 2.198-1.96 3.708-6.422 2.97-6.422 2.97-.439 3.794-4.9 4.103-4.9 4.103.352 4.566-3.78 5.601-3.78 5.601 1.089 3.793-3.483 6.209-3.483 6.209 2.21 3.196.372 6.13.372 6.13l-.104 3.19 73.949.341h-.012z', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M170.346 188.217c-13.316-1.332-28.648-4.493-40.483 2.17-7.935-4.674-18.982-4.388-28.388-3.474-5.108.914-11.117.914-16.456 1.786l-.837.118c-9.686.643-18.472-2.218-26.889-5.979 2.673 15.168 5.639 30.712 7.097 46.592 3.176 23.518-11.13 43.263-5.262 66.495 3.504 11.148 15.765 17.63 26.987 18.914 10.865.641 22.108 2.421 32.164 4.604 1.912.398 4.18 1.285 5.5 1.856 2.77 1.158 4.8 2.861 6.58 4.682 6.071-6.322 14.969-8.08 23.748-9.008 15.82-1.849 35.325-.843 45.01-15.173v-.81c5.263-7.925 4.565-20.015 2.283-28.995-.154-3.133-.991-5.895-1.445-8.88-9.665-25.522-1.389-54.224 2.77-79.948-5.08 2.777-10.746 4.088-16.399 5.477-4.508.6-9.532.328-14.096.083l-1.89-.509' }),
      _react2.default.createElement('path', { d: 'M190.224 261.464c-.062 1.681.845 3 1.173 4.556 1.85 11.155 3.636 25.932-7.851 32.854-12.708 8.078-29.373 4.618-44.077 8.894-2.938.817-6.985 3.517-9.051 5.428-1.326-.872-2.659-2.211-4.369-3-12.1-6.432-27.83-4.277-41.487-7.751-6.86-2.17-14.012-7.513-15.75-14.533-4.466-18.417 6.232-34.116 4.969-52.387-.817-13.953-3.162-27.348-6.386-40.43 10.677 4.974 23.036 5.805 35.04 3.42 8.89-1.243 19.24-1.27 27.572 2.49 4.592-1.975 9.965-2.861 14.914-3.405 9.407.914 19.518 2.616 29.205 2.547 6.47-.336 12.346-2.206 17.97-4.696-3.336 21.62-9.742 44.268-1.877 66.014' }),
      _react2.default.createElement('path', { d: 'M171.022 265.774l-.104-20.33h2.505L142.34 225.37l-.056-10.43h3l-15.541-11.127-15.465 11.121h2.994l.056 10.423-30.915 20.045 2.47.013.105 20.317 82.026.056' }),
      _react2.default.createElement('path', { d: 'M376.04 906.46l-.091-17.739h2.185l-27.113-17.513-.049-9.1h2.618l-13.557-9.71-13.49 9.704h2.611l.05 9.094-26.968 17.49 2.155.011.091 17.727 71.551.05.006-.014z', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M180.583 292.478l.007 6.362-100.134-.112-.042-6.335 100.177.085' }),
      _react2.default.createElement('path', { d: 'M384.38 929.76l.006 5.551-87.347-.097-.036-5.528 87.384.074h-.006z', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M87.106 292.1l-.084-21.53 4.054-.009-.223 21.782.244-21.607-5.84-.167v-4.62l89.492.1.042 4.576h-5.52l.104 21.802-.195-21.802h4.11l.091 21.557' }),
      _react2.default.createElement('path', { d: 'M302.84 929.43l-.073-18.786 3.536-.007-.194 19.005.213-18.852-5.095-.146v-4.03l78.064.085.036 3.994h-4.815l.091 19.023-.17-19.023h3.585l.08 18.809', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M319.62 924.8l-.055-13.1h-10.482l.061 13.087 10.476.013', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M311.94 914.43l.03 7.61h4.797l-.024-7.61h-4.803M370.86 924.84l-.06-13.087-10.447-.012.049 13.099h10.458', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M363.18 914.48l.055 7.585h4.79l-.042-7.585h-4.803M370.78 903.51l-.06-13.101H360.26l.037 13.101h10.488-.006z', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M363.1 893.16l.03 7.597h4.791l-.006-7.597H363.1M319.53 903.46l-.073-13.076-10.464-.013.049 13.082h10.488v.007z', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M311.85 893.11l.024 7.585 4.803.012-.036-7.597h-4.791M338.5 903.48l-.049-13.076-10.47-.012.043 13.087H338.5', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M330.83 893.13l.024 7.585 4.797.024-.03-7.609h-4.791M353.12 903.51l-.073-13.101-10.464-.012.049 13.087 10.488.025', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M345.44 893.14l.036 7.61h4.797l-.024-7.61h-4.809', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M147.727 257.785l.133 34.612-34.774-.056-.125-34.583 34.76.027' }),
      _react2.default.createElement('path', { d: 'M355.72 899.49l.116 30.199-30.333-.049-.11-30.174 30.321.024h.006zM325.21 908.11l30.54.024M329.02 929.68l-.103-21.342M352.14 929.69l-.103-21.329M366.79 886.63l-17.081-12.474-19.193-.024-16.947 12.449 53.222.048M331.99 863.8l.03 7.61 16.144.011-.03-7.609-16.144-.012', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M336.37 865.69l.024 3.792h7.415l-.025-3.792h-7.414M340.04 855.14l8.979 6.348-17.891-.023 8.912-6.325', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M171.366 202.028c2.924-.07 3.678 12.042 3.685 18.042 2.512.704 8.08 4.207 10.544 7.374l-28.25-.042c2.43-3.125 7.956-6.642 10.448-7.346 0-6.007.614-18.111 3.573-18.042' }),
      _react2.default.createElement('path', { d: 'M376.34 850.84c2.55-.06 3.208 10.507 3.214 15.742 2.191.615 7.05 3.671 9.198 6.434l-24.642-.036c2.118-2.727 6.94-5.795 9.113-6.41 0-5.241.536-15.803 3.117-15.742M326.81 900.33h2.21l-.646 1.186s1.066 1.37.019 2.94l.578 1.09h-2.13l.578-1.035s-1.09-1.82.048-2.995l-.657-1.186M331.31 900.33h2.21l-.64 1.186s1.066 1.334.007 2.94l.572 1.09h-2.125l.572-1.035s-1.065-1.82.055-2.995l-.651-1.186M336.23 900.33h2.204l-.658 1.186s1.078 1.37.018 2.94l.579 1.115-2.113-.024.567-1.036s-1.078-1.807.042-2.995l-.645-1.186h.006zM341.77 900.35h2.222l-.651 1.2s1.065 1.345.006 2.921l.596 1.108H341.8l.573-1.035s-1.066-1.832.073-2.995l-.67-1.199h-.006zM346.7 900.35h2.204l-.652 1.2s1.072 1.345.012 2.915l.585 1.114h-2.125l.554-1.035s-1.071-1.82.085-2.995l-.663-1.199M351.6 900.36l2.204-.012-.652 1.199s1.09 1.346.03 2.922l.555 1.108h-2.131l.572-1.035s-1.065-1.82.073-2.995l-.651-1.187', stroke: '#000', 'stroke-width': '1.242', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M130.508 336.763c13.022.042 29.038-2.616 36.54-6.494l16.476-1.46.328 20.101c-13.958 7.695-46.184 9.348-53.275 9.292-7.097.056-39.721-1.625-53.742-9.348l.182-20.114 16.511 1.486c7.502 3.859 24.006 6.537 37.014 6.537h-.035' }),
      _react2.default.createElement('path', { d: 'M340.7 968.4c11.359.036 25.329-2.283 31.873-5.667l14.372-1.273.286 17.538c-12.175 6.714-40.286 8.157-46.47 8.108-6.192.049-34.65-1.418-46.88-8.156l.158-17.55 14.403 1.296c6.544 3.367 20.94 5.704 32.287 5.704h-.03', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M34.417 251.023l14.516 4.62-4.39 23.498-13.74 2.134s-2.317-12.356 3.614-30.265' }),
      _react2.default.createElement('path', { d: 'M256.88 893.59l12.662 4.03-3.829 20.503-11.986 1.862s-2.021-10.781 3.153-26.407v.012z', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M44.54 278.885l-13.734 2.393 8.688-12.356 5.046 9.963' }),
      _react2.default.createElement('path', { d: 'M265.71 917.9l-11.98 2.088 7.579-10.781 4.401 8.693', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M25.739 267.951l13.992 1.011c.314 11.854 1.751 57.091 55.779 59.547l-1.682 16.458c-65.765.683-70.762-55.486-68.089-77.016' }),
      _react2.default.createElement('path', { d: 'M249.31 908.36l12.205.882c.274 10.343 1.528 49.813 48.656 51.956l-1.467 14.36c-57.367.596-61.726-48.413-59.394-67.198zM294.11 978.5l14.384-3.141', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M225.453 251.195l-14.46 4.577 4.586 23.463 13.768 2.211s2.212-12.348-3.894-30.264' }),
      _react2.default.createElement('path', { d: 'M423.52 893.74l-12.613 3.993 4 20.472 12.01 1.93s1.93-10.775-3.397-26.407v.012z', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M215.571 278.988l13.769 2.47-8.807-12.362-4.962 9.892' }),
      _react2.default.createElement('path', { d: 'M414.9 917.99l12.01 2.155-7.682-10.786-4.328 8.631', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M234.292 268.135l-14.012.956c-.203 11.84-1.236 57.097-55.264 59.497l1.836 16.444c65.751.76 70.274-55.382 67.44-76.905' }),
      _react2.default.createElement('path', { d: 'M431.23 908.52l-12.223.835c-.177 10.33-1.077 49.818-48.206 51.912l1.601 14.348c57.355.662 61.3-48.322 58.828-67.101v.005zM387.04 978.57l-14.42-3.15', stroke: '#000', 'stroke-width': '.289', transform: 'matrix(1.1464 0 0 1.1461 -260.07 -773.12)' }),
      _react2.default.createElement('path', { d: 'M121.761 346.666c-.37.237-.872.3-1.451.272l-2.61-.133.223-3.257 2.59.138c.509.035.913.134 1.165.287.523.272.753.775.704 1.472-.034.6-.244.991-.628 1.22m-4.382 5.13l.258-3.971 3.043.21c.984.076 1.716-.182 2.212-.685.516-.488.782-1.13.816-1.855.063-.845-.153-1.535-.656-2.045-.481-.488-1.165-.746-2.023-.83l-4.348-.271-.6 9.348 1.291.084M126.84 343.972l3.182.035c.46.042.824.098 1.089.223.488.23.719.691.719 1.36 0 .63-.182 1.048-.538 1.3-.342.229-.837.333-1.43.333l-3.057-.035.028-3.216m-.049 8.282l.028-3.991 2.987.042c.53 0 .92.042 1.193.174.44.202.656.629.677 1.214l.077 1.57c.02.376.028.607.049.76.041.112.062.23.118.315h1.605l-.028-.203c-.181-.098-.328-.286-.39-.572-.056-.182-.084-.454-.098-.796l-.028-1.248c-.02-.566-.119-.956-.335-1.173a1.673 1.673 0 0 0-.844-.6c.446-.236.781-.508 1.026-.844.23-.37.349-.837.349-1.408 0-1.075-.44-1.808-1.333-2.205-.482-.216-1.096-.328-1.822-.342l-4.487-.042-.035 9.376h1.291M136.745 350.299c-.572-.697-.88-1.57-.95-2.602-.062-1.298.19-2.288.782-2.959.6-.725 1.375-1.073 2.387-1.13 1.019-.055 1.856.273 2.477.914.636.629.998 1.5 1.061 2.589.035 1.046-.146 1.974-.628 2.79-.474.83-1.263 1.298-2.428 1.326-1.215.063-2.122-.223-2.701-.928m-1.535-5.903c-.6.928-.845 2.003-.782 3.301.09 1.402.523 2.56 1.34 3.433.907.872 2.108 1.31 3.587 1.227 1.584-.07 2.777-.67 3.587-1.772.656-.997.97-2.156.9-3.586-.09-1.277-.46-2.317-1.151-3.091-.873-1.04-2.15-1.5-3.88-1.43-1.633.104-2.834.704-3.608 1.918M179.276 330.907c.9-.154 1.682-.111 2.394.132 1.047.328 1.752 1.103 2.191 2.289l-1.29.18c-.28-.64-.678-1.08-1.215-1.325-.523-.23-1.18-.286-1.933-.173a3.01 3.01 0 0 0-2.08 1.276c-.488.753-.635 1.758-.418 3.042.181 1.06.572 1.96 1.214 2.56.593.614 1.465.83 2.603.67.851-.14 1.535-.48 2.017-1.068.502-.557.649-1.402.481-2.49l-3.008.46-.153-1.032 4.187-.642.816 4.96-.83.126-.516-1.144c-.35.517-.698.914-1.005 1.144-.517.405-1.215.663-2.087.789-1.13.174-2.163-.029-3.098-.629-1.026-.76-1.69-1.89-1.94-3.46-.273-1.541-.028-2.86.684-3.9.676-1.004 1.66-1.59 2.986-1.78M188.746 330.185l3-1.089c.412-.153.768-.202 1.075-.166.551.04.956.369 1.186 1.024.217.559.217 1.047-.027 1.39-.259.355-.663.613-1.25.829l-2.819 1.012-1.165-3m3 7.751l-1.465-3.76 2.791-1.005c.524-.168.887-.259 1.159-.23.495.062.872.363 1.123.934l.635 1.431c.14.355.252.571.342.67.042.125.133.202.203.285l1.514-.557-.084-.203c-.223 0-.44-.125-.6-.37-.118-.174-.23-.425-.39-.718l-.496-1.173c-.223-.509-.454-.822-.719-1.011a2.395 2.395 0 0 0-.998-.272c.307-.356.53-.712.614-1.13.091-.426.05-.9-.153-1.43-.384-.998-1.089-1.542-2.08-1.612-.523-.042-1.123.07-1.814.313l-4.215 1.501 3.405 8.818 1.235-.454M202.72 333.29l-5.352-7.807 5.876-3.747.649.943-4.816 3.076 1.647 2.386 4.446-2.86.607.914-4.446 2.86 1.815 2.63 4.899-3.132.649.921-5.98 3.817M207.409 319.48l1.535-1.688c.712-.754 1.466-1.096 2.29-.998.823.07 1.66.502 2.553 1.284.245.188.46.432.684.704.391.51.621.957.768 1.403.125.559.098 1.068-.098 1.556-.118.244-.328.53-.642.872l-1.542 1.675-5.548-4.821m8.11 3.676c1.088-1.2 1.325-2.49.69-3.948a6.668 6.668 0 0 0-1.717-2.226c-.984-.873-2.01-1.319-3.091-1.402-1.2-.091-2.22.342-3.106 1.31l-2.617 2.805 7.216 6.294 2.617-2.819M221.108 315.87l-8.304-4.877.677-1.074 8.318 4.85-.684 1.115M224.364 310.208l-8.967-3.587 2.645-6.307 1.088.419-2.156 5.198 2.7 1.06 2.017-4.786 1.033.426-1.996 4.78 3.022 1.227 2.212-5.26 1.089.41-2.694 6.42M228.48 299.194l-9.435-2.086.314-1.458 8.716-2.944-7.655-1.689.279-1.144 9.435 2.03-.3 1.416-8.73 3.008 7.655 1.653-.272 1.214M227.735 287.217l.118-1.186c.545.015 1.005-.07 1.354-.257.684-.37 1.082-1.074 1.186-2.115.042-.487.021-.914-.09-1.318-.203-.781-.642-1.214-1.347-1.284-.523-.056-.9.07-1.173.356-.244.328-.502.802-.697 1.472l-.433 1.235c-.28.809-.537 1.367-.817 1.681-.446.587-1.074.79-1.877.733-.858-.09-1.556-.432-2.051-1.088-.51-.6-.72-1.458-.594-2.52.084-.968.405-1.785.977-2.44.53-.6 1.354-.887 2.408-.776l-.098 1.186c-.516 0-.928.091-1.228.3-.544.3-.844.935-.935 1.863-.077.768.028 1.284.32 1.675.294.328.664.537 1.096.572.461.041.824-.105 1.075-.46.182-.245.398-.775.691-1.633l.426-1.298c.21-.6.46-1.06.753-1.388.524-.544 1.208-.775 2.066-.711 1.047.11 1.794.544 2.177 1.34.377.802.524 1.688.433 2.692-.119 1.137-.488 2.03-1.172 2.63-.684.614-1.536.823-2.568.74M32.147 286.644l.217 1.172c-.524.104-.942.314-1.25.586-.55.516-.74 1.291-.55 2.345.083.446.244.885.446 1.235.419.711.963.997 1.654.885.51-.09.844-.285 1.005-.648.153-.357.265-.9.3-1.598l.063-1.32c.041-.815.132-1.456.314-1.813.286-.642.823-1.04 1.626-1.171.858-.155 1.612.04 2.26.53.657.453 1.09 1.241 1.25 2.287.202.957.112 1.815-.265 2.589-.363.754-1.061 1.214-2.129 1.409l-.21-1.185c.496-.182.866-.357 1.11-.6.42-.468.545-1.145.384-2.072-.125-.755-.384-1.243-.774-1.486-.384-.287-.768-.399-1.187-.328-.467.07-.774.328-.92.746-.091.279-.161.858-.224 1.744l-.063 1.367c-.035.642-.132 1.173-.349 1.536-.342.669-.921 1.08-1.765 1.213-1.068.181-1.892-.063-2.478-.747-.6-.67-.97-1.472-1.158-2.47-.21-1.185-.056-2.106.419-2.845.481-.76 1.242-1.2 2.275-1.347M31.551 299.01l9.226-2.776 2.15 6.495-1.124.355-1.759-5.337-2.805.845 1.626 4.932-1.075.342-1.612-4.946-3.126.934 1.786 5.456-1.102.315-2.185-6.614M35.644 310.277l8.486-4.5.907 1.584-5.834 6.167 8.52-1.458.88 1.57-8.465 4.472-.6-1.04 4.996-2.63c.182-.105.461-.258.866-.474.397-.181.844-.426 1.29-.656l-8.485 1.444-.621-1.102 5.792-6.147-.28.14c-.18.104-.495.258-.92.502a6.979 6.979 0 0 1-.935.502l-4.983 2.672-.614-1.06M51.453 322.77c-.426-.098-.845-.342-1.256-.768l-1.794-1.849 2.415-2.212 1.807 1.843c.35.342.572.676.691.963.168.55 0 1.053-.51 1.527-.46.426-.92.6-1.353.495m-6.818.858l2.959-2.714 2.1 2.128c.677.691 1.368 1.005 2.094.992a2.953 2.953 0 0 0 1.933-.845c.628-.558.928-1.214.928-1.918-.007-.684-.321-1.326-.9-1.926l-3.015-3.077-7.02 6.446.907.914M53.104 331.159l5.087-7.975 6.015 3.656-.628.95-4.94-2.958-1.529 2.414L61.652 330l-.586.914-4.55-2.741-1.73 2.699 5.003 3.008-.6.941-6.085-3.663M68.156 329.623l3.056.97c.433.132.747.3.956.489.391.37.496.9.266 1.541-.189.558-.475.921-.921 1.075-.398.07-.9.07-1.487-.112l-2.882-.92 1.012-3.043m-2.638 7.835l1.27-3.802 2.847.928c.51.133.88.314 1.061.502.349.314.454.781.28 1.36l-.427 1.514c-.097.37-.146.614-.188.726 0 .119 0 .245.021.328l1.5.488.091-.216c-.16-.126-.251-.355-.244-.641.035-.176.084-.454.181-.776l.363-1.214c.147-.53.203-.927.07-1.213-.112-.3-.3-.573-.614-.83.474-.084.886-.23 1.235-.49.328-.285.607-.683.775-1.24.342-1.013.153-1.857-.6-2.499-.377-.334-.915-.62-1.62-.886l-4.27-1.318-2.987 8.895 1.249.384' }),
      _react2.default.createElement('path', { d: 'M78.485 175.576c1.102-2.66 11.32-9.908 44.844-6.733 0 0 5.666 3.46 8.995 3.014 1.898-.245-1.117.118-3.594-1.94-2.526-2.058-3.064-6.278 2.708-6.167 5.743.147 27.244 1.36 27.649 3.292.376 1.954-11.369 2.77-15.737 2.659-4.39-.118-3.88 2.1.488 1.933 13.65-.489 28.55-5.296 44.286 5.832 1.877 1.353-4.746 1.57-9.868-.607 0 0-13.88.719-19.882-.265 0 0-4.613 3.753-10.621 3.384.781 1.946-2.22 9.21-21.11 3.746-3.12.956-14.487 2.86-13.245-.516-2.994 0-8.242.963-9.024-.74-.753-1.674 9.24-4.207 10.992-6.02 0 0-21.139.202-25.144-1.257 0 0-12.47 2.798-11.738.37' }),
      _react2.default.createElement('path', { d: 'M85.26 205.168c.454-.613.635-1.716 1.598-1.688 2.094.558 3.517 4.388 6.092 1.904.915-.202 1.263 1.04 2.017 1.187.482 2.128 2.191-.433 3.468-.287 2.73-1.214 6.107-1.5 9.338-.9.097 2.086-1.536 4.389-3.587 5.575.042 2.1 1.947 3.447 1.912 5.56-.328.79-.056 2.03-1.25 2.288-1.514-.272-3.007-.432-4.263-1.276-.154-.154-.28-.454-.6-.356-.154.704.949 1.403 1.381 2.12-.76 1.298-2.023.112-3.084.126-.314.747-.014 1.689-.782 2.17-1.34-.042-1.612-1.5-2.435-2.225-.845.913.593 1.458.795 2.183-.516 2.749-.446 5.435-3.196 7.235l-1.842.915c-.503-1.382-.189-3.475-.524-4.92-1.088 1.773-1.94 3.322-3.538 4.821-1.87-.614-2.959-2.818-3.37-4.646-.782-2.128-.335-4.675 1.347-6.216-.573-1.117-2.534-.858-2.813-2.448-2.938-1.913-4.564 3.348-6.462.613-.614-2.553.119-5.728 1.968-7.633-.412-1.046-1.78-.773-2.59-1.373-1.848-1.571-4.514-3.23-4.382-6.064 5.06-1.91 11.11-.509 14.788 3.335' }),
      _react2.default.createElement('path', { d: 'M87.885 204.882c-.118 2.315 1.564.627 2.813 2.029-.977-.384-1.69 1.688-2.645.502l-.6.573c.349.795 1.026.9.32 1.772-1.046.397-1.255-.914-1.744-1.43-.084-.23.16-.663-.223-.817-.593.502-1.214.684-2.031.6-.223-.446-.656-1.032-.216-1.374.802-1.082 2.044.39 2.652-.37.097-.67-.489-1.485.272-1.947.523.091 1.193-.194 1.41.462M94.145 206.784c.062.447-.23 1.074.356 1.39.76-.413 1.57-.1 2.01.655-.007.404.118.934-.412 1.13l-1.187-.223c.084-.231-.293-.377-.44-.6-.523-.16-.83.264-1.22.522.293.447.97.691.809 1.264-.698.697-1.04-.6-1.807-.273-.524-.202.188-1.29-.635-1.618-.977 0-.328 1.604-1.578.977-.446-.503-.886-1.18-.404-1.744.523-.35 1.41-.26 1.856.194.76-.843.837-4.101 2.659-1.674M86.35 210.142c.509.733-.113 1.73.536 2.547 1.02-1.904 2.003.411 3.218.23.37.453.125 1.082.195 1.598-1.5.397-3.308.872-4.634-.328l-.37.425c.789.733 1.536 1.563.908 2.79-1.124.245-2.862.273-3.427-.885-.293-.955.684-1.646-.349-2.414-.746.928-.712 2.17-2.268 1.325-.963-.53-1.249-1.624-.767-2.546 1.004-1.584 2.763.05 3.852-.726.153-1.36-.35-2.546.9-3.299 1.068-.189 1.563.613 2.212 1.283' }),
      _react2.default.createElement('path', { d: 'M90.602 210.979c-.502 2.316-2.247-.119-3.063-.217 1.088-1.931 1.772.63 3.063.217M96.036 213.5c-1.214.341-1.026-1.173-1.626-1.766l.468-.425c.44.53.774 1.487 1.158 2.191' }),
      _react2.default.createElement('path', { d: 'M94.397 213.03c.349.803-.789 1.445.181 2.03.307-.257.684-.613.845-.76.83.245 1.793.391 2.372 1.214.622 1.703-1.102 1.66-2.08 2.135l-.97-.042c.231-.474-.418-.677-.578-1.004-.447-.112-.817.027-1.068.404.216 1.082 1.535 1.926.174 2.888-1.151-.076-2.938.37-2.833-1.22-.433-.9 1.172-2.289-.544-2.344-.566 1.214-1.187 2.385-2.66 1.235l.182-1.73c1.41.04 3.078.285 3.713-1.291.405-1.144-.705-2.198.286-3.105 1.438-.328 2.247.635 2.98 1.59' }),
      _react2.default.createElement('path', { d: 'M93.365 215.632c.363.859-.614.915-1.075 1.34-.62.049-1.053-.196-1.43-.614-.28-1.04.495-1.145 1.088-1.556.691-.286.977.516 1.417.83' }),
      _react2.default.createElement('path', { d: 'M92.517 216.194c-.154.202-.37.14-.6.195l-.217-1.039c.46.041 1.061.188.817.844' })
    )
  );
};
Sx = (0, _pure2.default)(Sx);
Sx.displayName = 'Sx';

exports.default = Sx;
//# sourceMappingURL=sx.js.map