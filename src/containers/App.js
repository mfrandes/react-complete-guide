import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component
{
    constructor( props )
    {
        super( props )
        console.log( '[App.js] Constructor' );
    }

    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: 28 },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Ely', age: 24 }
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    };

    static getDerivedStateFromProps( props, state )
    {
        console.log( '[App.js] getDeriverdStateFromProps', props );
        return state;
    }

    componentDidMount()
    {
        console.log( '[App.js] componentDidMount' );
    }

    componentDidUpdate()
    {
        console.log( '[App.js] componentDidUpdate' );
    }

    shouldComponentUpdate( nextProps, nextState )
    {
        console.log( '[App.js] shouldComponentUpdate' );
        return true;
    }

    nameChangedHandler = ( event, id ) =>
    {
        const personIndex = this.state.persons.findIndex( p =>
        {
            return p.id === id;
        } );

        const person = {
            ...this.state.persons[ personIndex ]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;
        const persons = [ ...this.state.persons ];
        persons[ personIndex ] = person;
        this.setState( ( prevState, props ) =>
        {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1
            }
        } );// this method guarantees to provive the expected state changes when changes depend on old state values, the easy way might be the wrong way!
    };

    deletePersonHandler = personIndex =>
    {
        // const persons = this.state.persons.slice();
        const persons = [ ...this.state.persons ];
        persons.splice( personIndex, 1 );
        this.setState( { persons: persons } );
    };

    togglePersonsHandler = () =>
    {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );
    };

    render()
    {
        console.log( '[App.js] rende' );

        let persons = null;
        if( this.state.showPersons )
        {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
            );
        }

        return (
            <Aux classes={classes.App}>
                <button onClick={() =>
                {
                    this.setState( { showCockpit: false } );
                }}>
                    Remove Cockpit
                    </button>
                {this.state.showCockpit ? <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}
                /> : null}
                {persons}
            </Aux>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default withClass( App, classes.App );
