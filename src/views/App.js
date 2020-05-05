import m from 'mithril'

// component with closure
// https://mithril.js.org/components.html#closure-component-state
const App = () => {
    let counter = 0

    return {
        view: () => {
            return m('div', [
                m('h1', "Amazing NW.js App"),
                m('h3', "powered by Mithril with Parcel"),
                m('p', `Count:  ${counter}`),
                m('button', {
                    onclick: () => {
                        counter++
                    }
                }, "Increment count")
            ])
        }
    }
}

export default App