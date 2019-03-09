import React from 'react';
import SlideshowImg from './SlideshowImg.jsx';
import SlideshowThumb from './SlideshowThumb.jsx';

const PhotoGrid = ({images, selectActivePhoto, scrollToActive, setCaption, copyUrl, hideFilmstrip}) => (
  <div className="img-grid container-fluid">

    {/* {--BUTTONS--} */}
    {/* {Share} */}
    <button type="button" className="share-btn btn btn-light d-none d-sm-block" data-toggle="modal" data-target="#share-modal">
      <i className="far fa-share-square"></i>&emsp;Share
    </button>
    {/* {Share xs} */}
    <button type="button" className="share-btn-xs btn btn-link d-block d-sm-none" data-toggle="modal" data-target="#share-modal">
      <i className="far fa-share-square"></i>
    </button>
    {/* {Save} */}
    <button type="button" className="save-btn btn btn-light d-none d-sm-block" data-toggle="modal" data-target="#save-modal">
      <i className="far fa-heart"></i>&emsp;Save
    </button>
    {/* {Save xs} */}
    <button type="button" className="save-btn-xs btn btn-link d-block d-sm-none" data-toggle="modal" data-target="#save-modal">
      <i className="far fa-heart"></i>
    </button>
    {/* {View photos} */}
    <button type="button" className="view-photo-btn btn btn-light" data-toggle="modal" data-target="#slideshow-modal">
      View Photos
    </button>

    {/* {--PHOTOS--} */}
    <div className="photogrid row h-100">
      {/* {Main image} */}
      <div className="col"><img id="image1" src={images[0].url} onClick={() => {selectActivePhoto(); setCaption()}}/></div>
      {/* {Subimages for sizes sm and up} */}
      <div className="col-sm-4 col-lg-3 border-left-0 d-none d-sm-block">
        <div className="row h-50 border-top-0 border-bottom-0 border-left-0">
          <img id="image2" src={images[1].url} onClick={() => {selectActivePhoto(); setCaption()}}/>
        </div>
        <div className="row h-50 border-bottom-0 border-left-0">
          <img id="image3" src={images[2].url} onClick={() => {selectActivePhoto(); setCaption()}}/>
        </div>
      </div>
      {/* {Subimages for sizes lg and up} */}
      <div className="col-lg-3 border-0 d-none d-lg-block">
        <div className="row h-50 border-bottom-0">
          <img id="image4" src={images[3].url} onClick={() => {selectActivePhoto(); setCaption()}}/>
        </div>
        <div className="row h-50">
          <img id="image5" src={images[4].url} onClick={() => {selectActivePhoto(); setCaption()}}/>
        </div>
      </div>
    </div>

    {/* {--MODALS--} */}
    {/* {Share modal} */}
    <div className="modal fade" id="share-modal" tabIndex="-1" role="dialog" aria-labelledby="share-modal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <div aria-hidden="true">&times;</div>
            </button>
            <h4 className="modal-title" id="share-modal-label">Share</h4>
            <p>Check out this awesome listing on Bearbnb:</p>
            <p>Log Cabin in the Woods - Habitats for rent in Montana.</p>
          </div>
          <div className="modal-body">
            <div className="border-bottom">
             <a href={`mailto:?subject=Check out this listing on Bearbnb!&body=Check out this listing on Bearbnb! ${window.location.href}`}><i className="far fa-envelope"></i><span className="btn-link">&nbsp;Email</span></a>
            </div>
            <div className="border-bottom">
             <a href="#" onClick={() => {copyUrl(); return false}}><i className="far fa-copy"></i><span className="btn-link copy-link">&nbsp;Copy Link</span></a>
            </div>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>

    {/* {Save modal} */}
    <div className="modal fade" id="save-modal" tabIndex="-1" role="dialog" aria-labelledby="save-modal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="save-modal-label">Save to list</h4>
          </div>
          <div className="modal-body">
            <button type="button" className="btn btn-primary btn-block facebook"><i className="fab fa-facebook-f"></i>&nbsp;Continue with Facebook</button>
            <button type="button" className="btn btn-outline-primary btn-block google"><img src="https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png" alt="Google logo" height="18px" width="18px"/>&nbsp;Continue in Google</button>
            <div className="or-wrapper container-fluid">
              <div className="col-5">
                <div className="row border-bottom"></div>
                <div className="row"></div>
              </div>
              <div className="col-2 or">or</div>
              <div className="col-5">
                <div className="row border-bottom"></div>
                <div className="row"></div>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-block email-signup"><i className="far fa-envelope"></i>&nbsp;Sign up with Email</button>
          </div>
          <div className="bottom-border"></div>
          <p>Already have a Bearbnb account?&nbsp;<strong>Log in</strong></p>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>

    {/* {Slideshow modal} */}
    <div className="slideshow-modal modal fade" id="slideshow-modal" tabIndex="-1" role="dialog" aria-labelledby="slideshow-modal" aria-hidden="true">
      <div className="modal-dialog modal-full" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            {/* {Slideshow carousel} */}
            <div id="carousel-custom" className="carousel slide" data-ride="carousel" data-interval="false">
              {/* {Slideshow carousel images} */}
              <div className="carousel-inner" role="listbox">
                <div className="image-arrow-wrapper">
                  <div className="carousel-item active">
                    <img className="d-block" src={images[0].url} alt={images[0].description}/>
                  </div>
                  {images.slice(1).map(image => <SlideshowImg image={image} key={image.index} setLength={images.length}/>)}
                  {/* {Slideshow carousel controls} */}
                  <a className="carousel-control-prev" href="#carousel-custom" role="button" data-slide="prev" onClick={() => {scrollToActive(); setCaption()}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-custom" role="button" data-slide="next" onClick={() => {scrollToActive(); setCaption()}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {/* {Slideshow carousel indicators} */}
              <div className="caption-filmstrip-wrapper">
                  <div className="caption-hide-wrapper">
                    <div className="img-caption">{images[0].index + 1}/{images.length}: {images[0].description}</div>
                    <div className="hide-filmstrip-btn" onClick={() => hideFilmstrip()}>Hide photo list<i className="fas fa-sort-down"></i></div>
                  </div>
                  <div className="filmstrip">
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-custom" data-slide-to="0" className="thumbnail active">
                        <img src={images[0].url} alt="images[0].description" className="img-responsive" onClick={() => setCaption()}/>
                        <p className="invisible-caption" hidden>{images[0].index + 1}/{images.length}: {images[0].description}</p>
                      </li>
                      {images.slice(1).map(image => <SlideshowThumb image={image} key={image.index} setLength={images.length} setCaption={setCaption}/>)}
                    </ol>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PhotoGrid;