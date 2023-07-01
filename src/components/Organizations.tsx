import { NextPage } from "next"
import { IOrganizations } from "model/mydata"


type Props = {
  organizations: Array<IOrganizations>
}

const Organizations: NextPage<Props> = ({ organizations }) => {
  if (organizations.length === 1) {
    const organization = organizations[0]
    return <>`${organization.name} ${organization.position}`</>
  }

  const liElem = [] as any
  organizations.forEach((organization, index) => {
    liElem.push(
      <li key={ index }>&nbsp;
        { `${organization.name} ${organization.position}` }
      </li>
    )
  })
  
  return (<ul className="list-inside">{ liElem }</ul>)
}

export default Organizations
