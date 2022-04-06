####    Redux : 
            a global container + architecture

######  store: 
            instance of redux , contains multiple fun's , 
            these fun.s are reducers which can work with redux
    
######  reducer: 
            word reducer meaning reduce the value of state
            a fun which return specific data of state

######  state: 
            global obj with data. 
            actually it contains all data of our proj. 

######  dispatch:
            fun which trigger something like user's action.

######  payload:
            a property to store data in action
            it can be obj, str, num, arr

######  Prop drilling: and how and why to avoid it?
            send data from 1 component tree to another by going through other parts,
             which don't need to use data, but become a road only for passing data, 
             so that it reah on its destination component part

            it cause data repetation
            extra and useless code for a componenet

            solution is put data on a global store and use directly, without bothering 
             other parent compenents , coming in the way.

######

######

######

######