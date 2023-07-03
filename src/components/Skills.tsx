import { NextPage } from "next"
import { Skill } from "model/mydata"


type Props = {
  skills: Array<Skill>
}

const Skills: NextPage<Props> = ({ skills }) => {
  const skillsElem: any = []
  skills.forEach((skill, index) => {
    const contentsElem: any = []
    skill.contents.forEach((content, content_index) => {
      contentsElem.push(
        <li key={ content_index } className="ml-4 my-2">
          <u>{ content.name }</u>
          {content.description &&
            <div className="ml-4">{ content.description }</div>
          }
        </li>
      )
    }, { content_index: 1 })
    skillsElem.push(
      <li key={ index } className="my-4">
        <h2 className="font-bold">{ skill.category }</h2>
        <ul className="list-inside">{ contentsElem }</ul>
      </li>
    )
  }, { index: 1 })

  return (<ul className="list-inside">{ skillsElem }</ul>)
}

export default Skills
