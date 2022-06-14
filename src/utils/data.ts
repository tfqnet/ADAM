export default [
    {'id': 1,
    'name': 'Medical Officer',
    'tasks': [{
        taskName: 'Call medical emergency',
        description:'Call medical emergency phone number and provide the nature of medical emergency, location of emergency and; your name and phone number\na.	Paramedics\nb.	Ambulance\nc.	Fire department\nd.	Other'
    },{
        taskName:'Do not move victim',
        description:'Do not move the victim unless necessary'
    },{
        taskName:'Call First personnal',
        description:'Call the following personnel trained in CPR and First Aid to provide the required assistance prior to the arrival of the professional medical help'
    },{
        taskName:'Wear appropriate PPE',
        description:'In case of rendering assistance to personnel exposed to hazardous materials, consult the Material Safety Data Sheet (MSDS) and wear the appropriate personal protective equipment. Attempt first aid ONLY if trained and qualified'
    }
    
]},
    {'id': 2,
    'name': 'Fire warden',
    'tasks': [{
        taskName: 'Check and evacuate',
        description:'Check all rooms and evacuate everyone on his floor'
    },{
        taskName: 'Priority check',
        description:'Pay attention to the disabled, children, pregnant women'
    },{
        taskName: 'Report to FCC',
        description:'Report to FCC'
    },{
        taskName: 'Conduct roll call',
        description:'At AA, conduct roll call using floor register & hand-over to Chief Security Officer'
    }]},
    {'id': 3,
    'name': 'Chief Security Officer/Asst',
    'tasks': [{
        taskName: 'Station check ',
        description:'At ground floor staircase exit, main entrance & exit'
    },{
        taskName: 'Patrol',
        description:'Patrolling all area'
    },{
        taskName: 'Check 1',
        description:'Direct SCDF to FCC'
    },{
        taskName: 'Check Traffic',
        description:'Direct Traffic'
    },{
        taskName: 'Monitor',
        description:'Monitor status at AA & report to FCC'
    }]},

]