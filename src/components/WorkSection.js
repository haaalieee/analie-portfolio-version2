import React from 'react';

class WorkSection extends React.Component{
    render(){
        return(
            <div>
                <div className="work-fold">
                    <div className="work-border">
                        <div className="row">
                            <div className="col-md-8 work-pads-parent">
                                <div className="row">
                                    <h1 className="fs">Schmuzter</h1>
                                </div>
                                <div className="row">
                                    <div className="col-md-2" id="work-line"></div>
                                    <div className="col-md-10">
                                        <h4 className="ss">Web Developer + Motion Content Designer</h4>
                                        <h6 className="st">2017 - 2018</h6>
                                        <br></br>
                                        <h6 className="su">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at lectus sagittis tortor feugiat venenatis. Mauris vulputate, eros quis porttitor congue, magna dui blandit diam, quis volutpat nulla mi at felis. Nunc at pharetra ante, ac lacinia justo. Nunc facilisis dolor nec nisl aliquet, ac molestie turpis hendrerit. Proin fringilla maximus felis id tempus. Sed ornare quam at ligula pulvinar vestibulum. Pellentesque ac molestie ipsum. Mauris vel dui sit amet erat pharetra fringilla. Pellentesque eu tincidunt dui. Sed ac fermentum ipsum.</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <p>Hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkSection;