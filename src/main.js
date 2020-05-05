// import main styling
import './styles/main.css'

// bring app version to status bar
import {version} from '../package.json'
document.title = `${document.title} - ${version}`

// import mithril and the app view (component)
import m from 'mithril'
import App from './views/App'

// mount the app component to document body
m.mount(document.body, App)