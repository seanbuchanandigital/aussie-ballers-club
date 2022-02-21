import './scss/style.scss';

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./js/', true, /\.js$/));
