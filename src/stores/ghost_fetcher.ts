import {GhostList } from '../Interfaces'
import ghosts from '../static/ghosts.json'

export function getGhosts(){
    return ghosts as unknown as GhostList
    
}

