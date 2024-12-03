section .text
	sub rsp, 8 ; stack reserved for `x`
	mov qword [rsp+0], 0
	mov rdx, 42
	push rdx
	mov rax, qword [rsp]
	add rsp, 8
	mov qword [rbp-8], rax ; assigned `x`

global _start
_start:
	push rbp
	mov rbp, rsp
	call _main
	mov rdi, rax
	mov rax, 60
	syscall
section .data
