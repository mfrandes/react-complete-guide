import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component
{
    static getDrivedStateFromProps( props, state )
    {
        console.log( '[Person.js] getDrivenStateFromProps' );
        return state;
    }

    // componentWillReceiveProps( props )
    // {
    //     console.log( '[Person.js] componentWillReceiveProps', props );

    // }

    // componentWillUpdate()
    // {
    //     console.log( '[Person.js] componentWillUpdate' );

    // }

    shouldComponentUpdate( nextProps, nextState )
    {
        console.log( '[Person.js] shouldComponentUpdate' );
        if( nextProps.person !== this.props.person )
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    getSnapshotBeforeUpdate( prevProps, prevState )
    {
        console.log( '[Person.js] getSnapshotBeforeUpdate' );
        return { message: 'Snaphot' };
    }

    componentDidUpdate( prevProps, prevState, snapshot )
    {
        console.log( '[Person.js] componentDidUpdate' );
        console.log( snapshot );
    }

    componentWillUnmount()
    {
        console.log( '[Person.js] componentWillUnmount' );
    }

    render()
    {
        console.log( '[Persons.js] rendering...' );
        return this.props.persons.map( ( person, index ) =>
            <Person
                click={() => this.props.clicked( index )}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed( event, person.id )}
            />
        );
    }
}

export default Persons;