k8s_files=`ls k8s/*.yml | sort` 

for file in $k8s_files
    do
        kubectl apply -f $file
    done