import * as React from 'react';
import { connect } from 'react-redux'

export interface IUserHobbiesProps {
}

class UserHobbies extends React.Component<IUserHobbiesProps> {
  public render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapState2Props = () => {
  return {
  };
}

export default connect(mapState2Props)(UserHobbies);
