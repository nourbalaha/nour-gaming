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
          id: 1,
          linkUrl: "consoles"
        },
        {
          title: 'PS4',
          imageUrl:
            'https://cnet1.cbsistatic.com/img/yPzY4G61oVgInoMuUPNpjZx_-zA=/868x488/2013/11/11/b8024faa-67c2-11e3-a665-14feb5ca9861/Sony_PS4_35618167_01.jpg',
          id: 2,
          linkUrl: "ps4"
        },
        {
          title: 'Switch',
          imageUrl:
            'https://cdn.arstechnica.net/wp-content/uploads/2019/07/2-4.jpg',
          id: 3,
          linkUrl: "switch"
        },
        {
          title: 'Xbox One',
          imageUrl:
            'https://cdn.pocket-lint.com/r/s/970x/assets/images/141329-games-review-xbox-one-x-review-image2-28fwsqx4oi.jpg',
          size: 'large',
          id: 4,
          linkUrl: "xbox-one"
        },
        {
          title: 'PC',
          imageUrl:
            'https://icdn5.digitaltrends.com/image/gaming-pc-2-1050x591.jpg',
          size: 'large',
          id: 5,
          linkUrl: "pc"
        }
      ]
    }
  }
  render () {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, imageUrl, title, size, linkUrl }) =>
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        )}
      </div>
    )
  }
}
