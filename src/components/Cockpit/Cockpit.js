import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) =>
{
    // useEffect( () =>
    // {
    //     console.log( '[Cocpit.js] use efect' );
    //     //Http req
    //     setTimeout( () =>
    //     {
    //         alert( 'Request simulation' );
    //     }, 1000 )
    // }, [ props.persons ] ); // this.will fire first time and than only  when objs in array change

    useEffect( () =>
    {
        console.log( '[Cocpit.js] useEfect' );
        //Http req
        setTimeout( () =>
        {
            alert( 'Request simulation' );
        }, 1000 )
        return () =>
        {
            console.log( '[Cocpit.js] clean up work in useEfect' );
        }
    }, [] ); // this will fire only first time

    useEffect( () =>
    {
        console.log( '[Cocpit.js] 2nd useEfect' );
        return () =>
        {
            console.log( '[Cocpit.js] clean up work in 2nd useEfect' );
        }
    } )

    // useEffect( () =>
    // {
    //     console.log( '[Cocpit.js] use efect' );
    //     //Http req
    //     setTimeout( () =>
    //     {
    //         alert( 'Request simulation' );
    //     }, 1000 )
    // } ); // this will fire each time we render

    let btnClass = '';
    if( props.showPersons )
    {
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if( props.persons.length <= 2 )
    {
        assignedClasses.push( classes.red ); // classes = ['red']
    }
    if( props.persons.length <= 1 )
    {
        assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;