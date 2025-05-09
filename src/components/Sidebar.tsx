import {Home,Settings,Layers,Square as ButtonIcon,Layout,Navigation} from 'lucide-react';
import { useState } from 'react';
//defining the component structure for the sidebar
//every componenet group in the below array must have these defined props

interface ComponentGroup {
    title:string;
    icon:React.ReactNode;
    components:string[];
}
const componentGroups:ComponentGroup[]=[
    {
        title:"Basic Components",
        icon: <ButtonIcon size={15} />,
        components:[
            "Button",
             "Input",
             "Card",
             "Toggle",
             "Badge"
        ]
    },
    {
        title:"Layout Components",
        icon:<Layout size={15} />,
        components:[
            "Container",
            "Grid",
            "Flex",
            "Stack",
             "Divider"

        ]
    },

    {
    title:"Navigation",
    icon:<Navigation size={15} />,
    components:[
        "Tabs",
        "Navbar",
        "Sidebar",
        "Menu",
        "Breadcrumb"
    ]
    }
];


const SideBar:React.FC=()=>{
    const [expandedGroup,setExpandedGroup]=useState<string|null>(null);
    const handleGroupClick=(groupTitle: string)=>{
        setExpandedGroup(expandedGroup===groupTitle?null:groupTitle);
    }
    const handleComponentClick=(componentName: string)=>{
        console.log(`Selected component: ${componentName}`);
    }
     return(
        <div className='w-64 h-screen bg-white dark:bg-neutral-900 h-screen p-4'>
            {componentGroups.map((group)=>(
                <div key={group.title} className='mb-4'>
                    <button onClick={()=>handleGroupClick(group.title)} className='w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'>
                        <span className='mr-2'>{group.icon}</span>
                        <span className='font-medium'>{group.title}</span>
                       </button>

                       {/*show componenet when group is expanded */}
                       {expandedGroup === group.title &&(
                        <div className='ml-6 mt-2 space-y-1'>
                            {group.components.map((component)=>(
                                <button key={component} onClick={()=>handleComponentClick(component)} className='w-full text-left p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md'>
                                {component}
                                </button>
                            ))}
                            </div>
                       )}
                       </div>
                    
            ))}
        </div>
   );
};
export default SideBar;
