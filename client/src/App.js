import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCurriculums, changeCurriculums, deleteCurriculums, postCurriculums} from './actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: ''
        }
    }

    componentDidMount() {
        this.props.fetchCurriculums();
    };


    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        })
    };

    handleDelete = (event) => {
        const id = event.target.id;
        this.props.deleteCurriculums(id);
    };

    handleSubmit = () => {
        this.props.postCurriculums(this.state);
    };

    render() {
        const {handleChange, handleDelete, handleSubmit} = this;
        const {curriculumsList} = this.props.curriculums;
            return (
                <div style={{backgroundColor : '#d3eafa'}}>
                <div class="container">
                    <div class="jumbotron">
                <div style={{margin: '20px 100px'}}>

                    <br />
                    <h1>College of Computing</h1>

                    </div>
                    </div>
                    <table>

                        <tbody>
                        {
                            curriculumsList.map((data, index) => {
                                return <tr key={index}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.course}</td>
                                    <td><button type="button" class="btn btn-warning" id={data.id}
                                                onClick={handleDelete}>delete</button></td>
                                </tr>

                            })
                        }
                        </tbody>
                    </table>
                    <tr>
                        <th>Add Curriculum</th>

                    </tr>
                    <from >

                        <input type="text" name="course" placeholder="course..."
                               onChange={handleChange}/>

                        <button class="btn" onClick={handleSubmit}>Submit</button>
                    </from>
                    </div>
                </div>
            )
    }
}

const mapStateToProps = ({curriculums}) => {
    return {
        curriculums,
    }
};

export default connect(mapStateToProps, {changeCurriculums, fetchCurriculums, deleteCurriculums, postCurriculums})(App);