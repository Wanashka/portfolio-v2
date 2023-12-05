import {connect} from 'react-redux';
import work from './work';

const mapStateToProps = (state: any) => ({
    project: state.project.project,
});

export default connect(mapStateToProps, {})(work);
