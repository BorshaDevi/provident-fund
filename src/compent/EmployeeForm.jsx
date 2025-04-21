'use client'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
const formSchema = z.object({
    firstName: z.string().min(2 ,{
        message:"Name must be at least 2 characters long"
    }).max(50 ,{
        message:"Name must be at most 50 characters long"
    }),

    lastName: z.string().min(2 ,{
        message:"Name must be at least 2 characters long"
    }).max(50 ,{
        message:"Name must be at most 50 characters long"}),

    employeeEmail:z.string().email(),

    employeeId: z.string().min(2 ,{
        message:"Employee ID must be at least 2 characters long"
    }).max(50 ,{
        message:"Employee ID must be at most 50 characters long"
    }),
    gender:z.string(),

    dateOfBirth:z.date(),

    dateOfConfirmation:z.date(),

    designation:z.string().min(2 ,{
        message:"Designation must be at least 2 characters long"
    }).max(50 ,{
        message:"Designation must be at most 50 characters long"
    }),

    basicSalary:z.number()
    
  })
const EmployeeForm= ()=>{
    const form=useForm({
            resolver: zodResolver(formSchema),
            defaultValues:{
                firstName:"",
                lastName:"",
                employeeEmail:"",
                employeeId:"",
                gender:"",
                dateOfBirth:'',
                dateOfConfirmation:'',
                designation:"",
            }
        })
        async function onSubmit (data){
            console.log(data)
        }
    return(
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-5">
                <FormField
                control={form.control}
                name="firstName"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="First Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="Last Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                <FormField
                control={form.control}
                name="firstName"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="First Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="lastName"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="Last Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>
                </form>
            </Form>
        </div>
    )
}
export default EmployeeForm;