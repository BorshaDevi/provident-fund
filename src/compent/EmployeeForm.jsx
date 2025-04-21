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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
                    {/* name */}
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

                {/* gender , designation  */}
                <div className="grid grid-cols-2 gap-5 mt-5">
                <FormField
                control={form.control}
                name="gender"
                
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Select {...field} onValueChange={field.onChange} defaultValue={field.value} placeholder='Select' >
                        <SelectTrigger className="w-[180px] ">
                            <SelectValue placeholder ='Select'></SelectValue>
                        </SelectTrigger>
                          <SelectContent className='bg-white'>
                            <SelectItem value='female'>Female</SelectItem>
                            <SelectItem value='male'>male</SelectItem>
                          </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="designation"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Designation </FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="designation" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                </div>

                {/* employeeId , date of birth */}
                <div className="grid grid-cols-2 gap-5 mt-5">
                <FormField
                control={form.control}
                name="employeeId"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Employee Id</FormLabel>
                    <FormControl>
                      <input type='text' {...field} placeholder="First Name" className='border-2 border-black p-1 rounded-md' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="dateOfBirth"
                render={({field})=>(
                  <FormItem >
                    <FormLabel>Date of Birth</FormLabel>
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