export default function renderEvidence(evidence:string){
    switch (evidence) {
      case "EMF 5": 
        return(
          <div className="ghost_evidence_item" style ={{color:"#db4d48"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/emf5-icon.png"}/>{evidence}</div>
        );
      case "Writing":
        return(
          <div className="ghost_evidence_item" style ={{color:"#4d8ce3"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/writing-icon.png"}/>{evidence}</div>
        );
      case "Ultraviolet":
        return(
          <div className="ghost_evidence_item" style ={{color:"#ad8ce7"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/fingerprints-icon.png"}/>{evidence}</div>
        );
      case "Freezing":
        return(
          <div className="ghost_evidence_item" style ={{color:"#9ae0f7"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/freezing-icon.png"}/>{evidence}</div>
        );
      case "DOTs":
        return(
          <div className="ghost_evidence_item" style ={{color:"#2ccc29"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/dots-icon.png"}/>{evidence}</div>
        );
      case "Ghost Orbs":
        return(
          <div className="ghost_evidence_item" style ={{color:"#dbd993"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/orbs-icon.png"}/>{evidence}</div>
        );
      case "Spirit Box":
        return(
          <div className="ghost_evidence_item" style ={{color:"#d18c5e"}}><img src={"https://tybayn.github.io/phasmo-cheat-sheet/imgs/spirit-box-icon.png"}/>{evidence}</div>
        );
    }
  };