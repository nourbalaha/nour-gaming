import React, { Component } from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

export default class Directory extends Component {
  constructor () {
    super()

    this.state = {
      sections: [
        {
          title: 'Consoles',
          imageUrl:
            'https://cdn.wccftech.com/wp-content/uploads/2018/05/WCCFcontrollers2-740x429.jpg',
          id: 1
        },
        {
          title: 'PS4',
          imageUrl:
            'https://media.4rgos.it/i/Argos/6185936_R_Z001A?w=750&h=440&qlt=70',
          id: 2
        },
        {
          title: 'Switch',
          imageUrl:
            'https://media.4rgos.it/i/Argos/2078126_R_Z001A?w=750&h=440&qlt=70',
          id: 3
        },
        {
          title: 'Xbox One',
          imageUrl:
            'https://images-na.ssl-images-amazon.com/images/I/61ux1cU49XL._AC_.jpg',
          size: 'large',
          id: 4
        },
        {
          title: 'PC',
          imageUrl:
            'https://icdn5.digitaltrends.com/image/gaming-pc-2-1050x591.jpg',
          size: 'large',
          id: 5
        }
      ]
    }
  }
  render () {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, imageUrl, title, size }) =>
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        )}
      </div>
    )
  }
}
