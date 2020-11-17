import React from "react"
import { isEmpty } from "lodash"
import "./style.scss"
import Link from "gatsby-link"
import Taxonomies from "../widgets/taxonomies"
import Taxonomiestwo from "../widgets/taxonomiestwo"
import Slider from "react-slick"
import Popapp from "../popapp"

const Contacts = props => {
  const { data } = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  }

  return (
    <>
      {!isEmpty(data) ? (
        <div className="container wrapper contacts">
          <div className="row">
            <aside className="col-md-3 aside">
              {/* Taxonomy Widget */}
              <Taxonomies
                taxonomies={data.menuItems}
                category={data.categories}
              />
              <Taxonomiestwo taxonomies={data.menuItemstwo} />
            </aside>
            <section className="col-md-9">
              {!isEmpty(data.AcfContact.mapContact) ? (
                <div
                  className="contacts-map"
                  dangerouslySetInnerHTML={{
                    __html: data.AcfContact.mapContact,
                  }}
                />
              ) : null}
              <div className="row contacts-row">
                {!isEmpty(data.AcfContact.addressBlock.block1) ? (
                  <div
                    className="col-sm-4 contacts-block"
                    dangerouslySetInnerHTML={{
                      __html: data.AcfContact.addressBlock.block1,
                    }}
                  />
                ) : null}
                {!isEmpty(data.AcfContact.addressBlock.block2) ? (
                  <div
                    className="col-sm-4 contacts-block"
                    dangerouslySetInnerHTML={{
                      __html: data.AcfContact.addressBlock.block2,
                    }}
                  />
                ) : null}
                {!isEmpty(data.AcfContact.addressBlock.block3) ? (
                  <div
                    className="col-sm-4 contacts-block"
                    dangerouslySetInnerHTML={{
                      __html: data.AcfContact.addressBlock.block3,
                    }}
                  />
                ) : null}
              </div>
              <section className="section-carousel">
                <Slider {...settings}>
                  {data.AcfContact.carousel.map((term, index) => (
                    <div className="screen4-block">
                      <div className="screen4-block__show">
                        {term.name ? (
                          <div className="block-name">{term.name}</div>
                        ) : null}
                        {!isEmpty(term.text) ? (
                          <div
                            className="contacts-block"
                            dangerouslySetInnerHTML={{
                              __html: term.text,
                            }}
                          />
                        ) : null}
                        <div className="contacts-more">
                          <Link className="contacts-link" to="{ term.link }">
                            {term.button}
                          </Link>
                        </div>                        
                        <div className="contacts-popapp">
                          <Popapp namebutton="Order" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </section>
            </section>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  )
}

export default Contacts
